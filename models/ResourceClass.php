<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
/**
 * This is the model class for table "resource_class".
 *
 * @property integer $class_id
 * @property string $name
 *
 * @property AttributeClassView[] $attributeClassViews
 * @property Resource[] $resources
 */
class ResourceClass extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'resource_class';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name','activation_status'], 'required'],
            [['name'], 'string', 'max' => 40]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'class_id' => 'Class ID',
            'name' => 'Name',
            'activation_status' => 'Activation Status'
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeClassView()
    {
        return $this->hasMany(AttributeClassView::className(), ['class_id' => 'class_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getResource()
    {
        return $this->hasMany(Resource::className(), ['class_id' => 'class_id']);
    }

    public static function findByResourceClassName($res_class_name)
    {
        //find ResourceClass in DB by Name
        return static::findOne(['name' => $res_class_name]);
    }
}
